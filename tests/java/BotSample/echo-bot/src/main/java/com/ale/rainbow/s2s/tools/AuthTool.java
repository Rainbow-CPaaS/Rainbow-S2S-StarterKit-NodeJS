/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.ale.rainbow.s2s.tools;

import java.security.MessageDigest;
import java.nio.charset.StandardCharsets;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author jouedje
 */
public class AuthTool {

    private static final char[] hexArray = "0123456789abcdef".toCharArray();

    private static String getSHA256(String data) throws NoSuchAlgorithmException {
        StringBuilder sb = new StringBuilder();
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            md.update(data.getBytes());
            byte[] byteData = md.digest();
            sb.append(bytesToHex(byteData));
        return sb.toString();
    }

    public static String xRainbowAppAuth(String appId,String appSecret, String password) {
        try {
            /*
            System.out.println("appId :"+appId);
            System.out.println("appSecret :"+appSecret);
            System.out.println("password :"+password);
            */
            return "Basic "+AuthTool.base64Encode(appId+":"+AuthTool.getSHA256(appSecret + password));
        } catch (NoSuchAlgorithmException ex) {
            Logger.getLogger(AuthTool.class.getName()).log(Level.SEVERE, null, ex);
        } catch (Exception ex) {
            Logger.getLogger(AuthTool.class.getName()).log(Level.SEVERE, null, ex);
        }
        return "";
    }

    private static String bytesToHex(byte[] bytes) {
        char[] hexChars = new char[bytes.length * 2];
        for (int j = 0; j < bytes.length; j++) {
            int v = bytes[j] & 0xFF;
            hexChars[j * 2] = hexArray[v >>> 4];
            hexChars[j * 2 + 1] = hexArray[v & 0x0F];
        }
        return String.valueOf(hexChars);
    }

    private static String base64Encode(String str) throws Exception {
        final byte[] authBytes = str.getBytes(StandardCharsets.UTF_8);
        String encoded = Base64.getEncoder().encodeToString(authBytes);
        return encoded;
    }
}
