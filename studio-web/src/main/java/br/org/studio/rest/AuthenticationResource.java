package br.org.studio.rest;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.org.studio.exception.EmailNotFoundException;
import br.org.studio.exception.InvalidPasswordException;
import br.org.studio.rest.dtos.LoginAuthenticationDto;
import br.org.studio.security.SecurityService;

import com.google.gson.Gson;

@Path("authentication")
public class AuthenticationResource {

	@Inject
	private SecurityService securityService;

	@Path("/login")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public String userLogin(String loginData) {
		Gson gson = new Gson();

		LoginAuthenticationDto loginDto = gson.fromJson(loginData, LoginAuthenticationDto.class);
		loginDto.encryptPassword();

		try {
			securityService.authenticate(loginDto);
			
			return gson.toJson(Boolean.TRUE);
			
		} catch (InvalidPasswordException e) {
			return gson.toJson(e);
			
		} catch (EmailNotFoundException e) {
			return gson.toJson(e);
		}
	}
}