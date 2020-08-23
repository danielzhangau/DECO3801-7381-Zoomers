package com.example.translinkrewards.bean;

import android.os.Build;

import androidx.annotation.RequiresApi;

import java.util.Objects;

public class UserBean {
    private String userName;
    private String userId;
    private String email;
    private String goCardNo;
    private String licenseNo;
    private String vrNo;

    public UserBean(String userName, String userId, String email, String goCardNo, String licenseNo, String vrNo) {
        this.userName = userName;
        this.userId = userId;
        this.email = email;
        this.goCardNo = goCardNo;
        this.licenseNo = licenseNo;
        this.vrNo = vrNo;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGoCardNo() {
        return goCardNo;
    }

    public void setGoCardNo(String goCardNo) {
        this.goCardNo = goCardNo;
    }

    public String getLicenseNo() {
        return licenseNo;
    }

    public void setLicenseNo(String licenseNo) {
        this.licenseNo = licenseNo;
    }

    public String getVrNo() {
        return vrNo;
    }

    public void setVrNo(String vrNo) {
        this.vrNo = vrNo;
    }

    @RequiresApi(api = Build.VERSION_CODES.KITKAT)
    @Override
    public int hashCode() {
        return Objects.hash(userName, userId, email, goCardNo, licenseNo, vrNo);
    }
}
