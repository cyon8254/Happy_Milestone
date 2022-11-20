package com.milestone.milestone.controller.school;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/school/*")
public class schoolController {

    @GetMapping("/school_list")
    public void schoolList() {
    };

    @GetMapping("/school_help")
    public void schoolHelp() {
    };

    @GetMapping("/school_detail")
    public void schoolDetail() {
    };

    @GetMapping("/school_donation")
    public void schoolDonation() {
    };


}