import { API_BASE_URL } from "@/config/constant";
import { RegisterPayload } from "@/types/user";
import Cookies from "js-cookie";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface LoginCredentials {
  username: string;
  password: string;
}

export const login = async (credentials: LoginCredentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAuthToken = (): string | undefined => {
  const tokenCookies = Cookies.get("authToken");
  if (!tokenCookies) return undefined;
  try {
    const jwtToken = atob(tokenCookies);
    return jwtToken;
  } catch (e) {
    console.error("Gagal decode Base64:", e);
    return undefined;
  }
};

export const registerAccount = async (request: RegisterPayload) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getProfile = () => {
  const token = getAuthToken();
  if (!token) {
    return null;
  }
  const payloadToken: JwtPayload = jwtDecode(token as string);

  const profile = {
    fullname: payloadToken.fullname,
    bio: payloadToken.bio,
    username: payloadToken.username,
    email: payloadToken.email,
    role: payloadToken.role,
  };

  return profile;
};
