<?php

namespace Ale\Rainbow\S2S\Webhook;

use ZMQContext;
use ZMQ;
use ReflectionClass;
use ReflectionMethod;
use React\EventLoop\Factory;
use React\ZMQ\Context;

class RainbowEventConnector
{

    public static $STOP = false;
    private $subscriber;
    private $context;
    private $callbacks;
    private $loop;
    private $subscribersInstances;

    public function __construct()
    {
        $this->callbacks = [];
        $this->subscribersInstances = [];
        //$this->context = new ZMQContext();
        $this->loop = Factory::create();
        $this->context = new Context($this->loop);
        //$subscriber = new ZMQSocket($context, ZMQ::SOCKET_SUB);
        $this->subscriber = $this->context->getSocket(ZMQ::SOCKET_SUB);
        $this->subscriber->connect("tcp://127.0.0.1:3000");
        $this->subscriber->setSockOpt(ZMQ::SOCKOPT_SUBSCRIBE, '');


        $this->callbacks['rainbow_onconnected'] = [];
        $this->callbacks['rainbow_onready'] = [];
        $this->callbacks['rainbow_onerror'] = [];
        $this->callbacks['rainbow_onmessagereceived'] = [];
        $this->callbacks['rainbow_onchatstate'] = [];
        $this->callbacks['rainbow_onpresencechanged'] = [];
        $this->callbacks['rainbow_onroommember'] = [];
        $this->callbacks['rainbow_onroominvite'] = [];
        $this->callbacks['rainbow_onbubbleinvitationreceived'] = [];
        $this->callbacks['rainbow_connected'] = [];
        $this->callbacks['rainbow_onreceipt'] = [];
        $this->callbacks['rainbow_onallreceiptrecived'] = [];
        $this->callbacks['rainbow_onroomstate'] = [];
        $this->callbacks['rainbow_onstopped'] = [];
    }

    public function start()
    {
        try {
            /*		    
            while (!RainbowEventConnector::$STOP) {
                $eventname = $this->subscriber->recv();
                $eventdata = $this->subscriber->recv();
                if (!empty($this->callbacks[$eventname])) {
					foreach ($this->callbacks[$eventname] AS $cls){
						$sinitizedData = stripslashes($eventdata);
						$sinitizedData = trim($sinitizedData,'"');
						$obj = json_decode($sinitizedData,TRUE);
						call_user_func_array([$cls[0], $eventname], [$obj]);
					}
                }
                usleep(100);
            }
*/
            $this->subscriber->on('messages', function ($msg) {
                $eventname = $msg[0];
                $eventdata = $msg[1];
                if (!empty($this->callbacks[$eventname])) {
                    foreach ($this->callbacks[$eventname] as $cls) {
                        $sinitizedData = stripslashes($eventdata);
                        $sinitizedData = trim($sinitizedData, '"');
                        $obj = json_decode($sinitizedData, TRUE);
                        if ($this->subscribersInstances[$cls[0]]) {
                            $reflectionMethod = new ReflectionMethod($cls[0], $eventname);
                            $reflectionMethod->invoke($this->subscribersInstances[$cls[0]], $obj);
                        }
                        //call_user_func_array([$cls[0], $eventname], [$obj]);
                    }
                }
            });
            $this->loop->run();
        } catch (\Exception $ex) {
            printf("ERROR : " . $ex->getMessage());
        }
    }

    public function closeEventConnector()
    {
        self::$STOP = true;
    }

    public function subscribe(RainbowEventHandlerInterface $subscriber)
    {
        $class = new ReflectionClass($subscriber);
        $className = $class->getName();
        print_r(__CLASS__ . "::" . __FUNCTION__ . " subscriber class name :${className}");
        $this->subscribersInstances[$className] = $subscriber;
        $methods = $class->getMethods(ReflectionMethod::IS_PUBLIC);
        foreach ($methods as $m) {
            $this->callbacks[$m->name][] = [$m->class];
        }
    }
}
