export const getAllUsers = async () => {
  const usersPayload = await fetch(`${process.env.API_BASE_URL}/users`)

  const users = await usersPayload.json()

  return users
}
