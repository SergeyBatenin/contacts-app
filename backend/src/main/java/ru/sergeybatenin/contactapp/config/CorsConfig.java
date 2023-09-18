package ru.sergeybatenin.contactapp.config;

import env.SettingApp;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import ru.sergeybatenin.contactapp.entity.Contact;

@Configuration
public class CorsConfig implements RepositoryRestConfigurer {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        config.exposeIdsFor(Contact.class);
        cors.addMapping(config.getBasePath() + "/**")
            .allowedOrigins(SettingApp.getHOST())
            .allowedMethods("GET", "POST", "PUT", "DELETE")
            .allowCredentials(true);
    }
}
