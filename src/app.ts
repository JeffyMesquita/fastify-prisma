import Fastify from "fastify";
import { userRoutes } from "./modules/user/user.route";
import { userSchemas} from './modules/user/user.schema';

const server = Fastify({});

server.get("/healthCheck", async (req, res) => {
  return { status: 200, message: "Okay!" };
});

async function main() {
  for(const schema of userSchemas) {
    server.addSchema(schema)
  }

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
