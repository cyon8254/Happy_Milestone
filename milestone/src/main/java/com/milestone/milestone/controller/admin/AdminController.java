package com.milestone.milestone.controller.admin;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/admin/*")
public class AdminController {
    @GetMapping("talent")
    public void community(){};

    @GetMapping("history")
    public void history(){};

    @GetMapping("schedule")
    public void schedule(){};

    @GetMapping("notice")
    public void notice(){};

    @GetMapping("statistics")
    public void statistics(){};

    @GetMapping("user")
    public void user(){};



}
