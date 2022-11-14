package com.milestone.milestone.controller.myPage;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/myPage/*")
public class MyPageController {

    @GetMapping("/myInfo")
    public String myInfo() {
        return "/myPage/myPage_myInfo";
    };

    @GetMapping("/password")
    public String password() {
        return "/myPage/myPage_password";
    };

    @GetMapping("/schedule")
    public String schedule() {
        return "/myPage/myPage_schedule";
    };

    @GetMapping("/schoolInfo")
    public String schoolInfo() {
        return "/myPage/myPage_schoolInfo";
    };

    @GetMapping("/likeList")
    public String likeList() {
        return "/myPage/myPage_likeList";
    };
}
