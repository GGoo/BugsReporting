package gp.assignment;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Given;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.Assert;


/* created by GP */

public class LoginDdySmall {

    private WebDriver driver;
    private  String ddySmall = "http://localhost:3000/sign_in";
    private String ddyMain = "http;;/localhost:3000";


    @Given("an open browser with http://localhost:3000/sign_in")
    public void browser_with_ddySmall_open() {
        driver = new ChromeDriver();
        driver.get(ddySmall);
    }

    @When("^user input (.*) into Email field")
    public void user_input_e_mail_into_email_input(String value) throws Throwable {
        WebElement emailInput = driver.findElement(By.cssSelector("input#account_email"));
        emailInput.sendKeys(value);
    }


    @And("^user input (.*) into Password field")
    public void user_input_password_into_password_input(String value) throws Throwable {
        WebElement passwordInput = driver.findElement(By.cssSelector("input#account_password_digest"));
        passwordInput.sendKeys(value);
    }


    @And("^user click submit button$")
    public void user_click_submit_button() throws Throwable {
        WebElement submitButton = driver.findElement(By.cssSelector("input[type=submit]"));
        submitButton.click();
    }

   @Then("^user is redirected to http://localhost:3000/")
    public void user_is_redirected_to_registered_page() throws Throwable {
        Assert.assertEquals(ddyMain, "http://localhost:3000");
    }

    @And("^user click sign out button")
        public void user_click_sign_out_button() throws Throwable {
            WebElement signOut = driver.findElement(By.cssSelector("a"));
           signOut.click();
        }

    @Then("^user close  the browser$")
    public void browserCloses() {
        driver.quit();
        driver = null;
    }


}