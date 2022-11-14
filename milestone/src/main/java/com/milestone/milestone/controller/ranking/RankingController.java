package com.milestone.milestone.controller.ranking;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/ranking/*")
public class RankingController {

    @GetMapping("/ranking")
    public void ranking(){
    }

}
