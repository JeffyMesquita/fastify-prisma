import Fastify from "fastify";
import { userRoutes } from "./modules/user/user.route";

const server = Fastify({});

server.get("/healthCheck", async (req, res) => {
  return { status: 200, message: "Okay!" };
});

async function main() {
  server.register(userRoutes, {
    prefix: "users",
  });

  try {
    await server.listen(3000, "0.0.0.0");

    console.log("Server ready listening on port 3000, http://localhost:3000");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
