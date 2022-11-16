package com.milestone.milestone.controller.school;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/school/*")
public class schoolController {

    @GetMapping("/schoolList")
    public void schoolList() {
    };

    @GetMapping("/schoolHelp")
    public void schoolHelp() {
    };

    @GetMapping("/schoolDetail")
    public void schoolDetail() {
    };

}