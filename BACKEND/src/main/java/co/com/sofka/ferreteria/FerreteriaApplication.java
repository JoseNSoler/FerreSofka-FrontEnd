package co.com.sofka.ferreteria;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableReactiveMongoRepositories
@EnableSwagger2
public class FerreteriaApplication {

	@Bean
	public Docket FerraApi(){
		return new Docket(DocumentationType.SWAGGER_2)
				.apiInfo(apiInfo())
				.select()
				.apis(RequestHandlerSelectors.any())
				.paths(PathSelectors.any())
				.build();
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder().title("Ferreteria SOFKA API")
				.description("Java BackEnd reference")
				.termsOfServiceUrl("http://use.com")
				.contact("contacto@prueba.com").license("MIT")
				.licenseUrl("MIT@prueba.com").version("1.0").build();
	}

	public static void main(String[] args) {
		SpringApplication.run(FerreteriaApplication.class, args);
	}

}
