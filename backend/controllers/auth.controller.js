export const signup = (req, res) => {
  // Logic for user signup
  res.status(201).json({ message: "User signed up successfully" });
}

export const login = (req, res) => {
  // Logic for user login
  res.status(200).json({ message: "User logged in successfully" });
}
export const logout = (req, res) => {
  // Logic for user logout
  res.status(200).json({ message: "User logged out successfully" });
}
