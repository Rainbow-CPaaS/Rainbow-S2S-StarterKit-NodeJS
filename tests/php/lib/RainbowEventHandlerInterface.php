<?php
namespace Ale\Rainbow\S2S\Webhook;

interface RainbowEventHandlerInterface{
	public function rainbow_onready($data);
	public function rainbow_onconnected($data);
	public function rainbow_onerror($data);
	public function rainbow_onmessagereceived($data);
	public function rainbow_onchatstate($data);
	public function rainbow_onpresencechanged($data);
	public function rainbow_onroommember($data);
	public function rainbow_onroominvite($data);
	public function rainbow_onbubbleinvitationreceived($data);
	public function rainbow_connected($data);
	public function rainbow_onreceipt($data);
	public function rainbow_onallreceiptrecived($data);
	public function rainbow_onroomstate($data);
	public function rainbow_onstopped($data);
}
