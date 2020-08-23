package com.example.translinkrewards.bean;

import android.os.Build;

import androidx.annotation.RequiresApi;

import java.util.Objects;

/**
 * This is the user entity, including userName, userId, email, goCardNo, licenseNo, vrNo
 */
public class UserBean {
    private String userName;
    private int userId;
    private String email;
    private String goCardNo;
    private String licenseNo;
    private String vrNo;

    /**
     * user entity
     * @param userName - name for user
     * @param userId - id for user，primary key for database
     * @param email - email for user
     * @param goCardNo - goCardNo for user
     * @param licenseNo - Driver license No for user
     * @param vrNo - Vihicle Registration No for user
     */
    public UserBean(String userName, int userId, String email, String goCardNo, String licenseNo, String vrNo) {
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

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
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
