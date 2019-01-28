package com.angula.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.angula.pojo.Rule;

@RestController
public class RuleController {

	@GetMapping("/api")
	public List<Rule> getRoleList(){
		Rule rule1 = new Rule(1, "Must be 5 characters.");
		Rule rule2 = new Rule(2, "Must not be used elsewhere.");
		Rule rule3 = new Rule(3, "Must be a cool.");
		return Arrays.asList(rule1, rule2, rule3);
	}
}
