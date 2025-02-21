package fnam.inventary;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class InventaryApplication {

	private static final Logger logger = LoggerFactory.getLogger(InventaryApplication.class);

	public static void main(String[] args) {
		logger.info("InventaryApplication started");
		SpringApplication.run(InventaryApplication.class, args);
	}
}
