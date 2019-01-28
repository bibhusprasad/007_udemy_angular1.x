package com.angula.pojo;

public class Rule {

	private int id;
	private String ruleName;

	public Rule() {

	}

	public Rule(int id, String ruleName) {
		this.id = id;
		this.ruleName = ruleName;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getRuleName() {
		return ruleName;
	}

	public void setRuleName(String ruleName) {
		this.ruleName = ruleName;
	}

}
