package com.milestone.milestone.controller.join;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
//@RequestMapping("/join/*")
@RequestMapping("/school/*")
public class JoinController {

//    @GetMapping("join")
//    public void join(){};
//
//    @GetMapping("joinWay")
//    public void joinWay(){};
    @GetMapping("/schoolList")
    public void schoolList(){};

}
