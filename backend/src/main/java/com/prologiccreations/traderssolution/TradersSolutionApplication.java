package com.prologiccreations.traderssolution;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.core.context.SecurityContextHolder;

@SpringBootApplication
public class TradersSolutionApplication {

	public static void main(String[] args) {
		SpringApplication.run(TradersSolutionApplication.class, args);
	}

	public static String getCurrentUsername(){
		return SecurityContextHolder.getContext().getAuthentication().getName();
	}

}
