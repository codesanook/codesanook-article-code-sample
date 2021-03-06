import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@EnableAutoConfiguration
public class HomeController {

    @RequestMapping("/")
    String home() {
        return "index";
    }


    public static void main(String[] args) throws Exception {
        SpringApplication.run(HomeController.class, args);
    }

}
