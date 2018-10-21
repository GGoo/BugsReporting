package gp.assignment;

/* created by GP */


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/gp/assignment/cucumber/",
        plugin = {"pretty", "html:out"})


public class LoginDdySmallTest {
}
