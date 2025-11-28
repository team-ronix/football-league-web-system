"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.0.1",
    "engineVersion": "f09f2815f091dbba658cdcd2264306d88bb5bda6",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider     = \"prisma-client\"\n  output       = \"../src/generated/prisma\"\n  moduleFormat = \"cjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nenum Gender {\n  MALE\n  FEMALE\n  OTHER\n}\n\nenum UserRole {\n  MANAGER\n  FAN\n}\n\nmodel Stadium {\n  id          Int      @id @default(autoincrement())\n  name        String\n  noOfRows    Int      @map(\"no_of_rows\")\n  seatsPerRow Int      @map(\"seats_per_row\")\n  matches     Match[]\n  createdAt   DateTime @default(now()) @map(\"created_at\")\n  updatedAt   DateTime @updatedAt @map(\"updated_at\")\n\n  @@map(\"stadiums\")\n}\n\nmodel Team {\n  id          Int      @id @default(autoincrement())\n  name        String\n  homeMatches Match[]  @relation(\"HomeTeam\")\n  awayMatches Match[]  @relation(\"AwayTeam\")\n  preferredBy User[]\n  createdAt   DateTime @default(now()) @map(\"created_at\")\n  updatedAt   DateTime @updatedAt @map(\"updated_at\")\n\n  @@map(\"teams\")\n}\n\nmodel Match {\n  id              Int         @id @default(autoincrement())\n  dateTime        DateTime    @map(\"date_time\")\n  homeTeamId      Int         @map(\"home_team_id\")\n  awayTeamId      Int         @map(\"away_team_id\")\n  stadiumId       Int         @map(\"stadium_id\")\n  mainRefereeName String      @map(\"main_referee_name\")\n  linesmen1Name   String      @map(\"linesmen1_name\")\n  linesmen2Name   String      @map(\"linesmen2_name\")\n  homeTeam        Team        @relation(\"HomeTeam\", fields: [homeTeamId], references: [id])\n  awayTeam        Team        @relation(\"AwayTeam\", fields: [awayTeamId], references: [id])\n  stadium         Stadium     @relation(fields: [stadiumId], references: [id])\n  matchSeats      MatchSeat[]\n  createdAt       DateTime    @default(now()) @map(\"created_at\")\n  updatedAt       DateTime    @updatedAt @map(\"updated_at\")\n\n  @@map(\"matches\")\n}\n\nmodel MatchSeat {\n  id         Int      @id @default(autoincrement())\n  seatNumber Int      @map(\"seat_number\")\n  userId     Int      @map(\"user_id\")\n  matchId    Int      @map(\"match_id\")\n  user       User     @relation(fields: [userId], references: [id])\n  match      Match    @relation(fields: [matchId], references: [id])\n  createdAt  DateTime @default(now()) @map(\"created_at\")\n  updatedAt  DateTime @updatedAt @map(\"updated_at\")\n\n  @@unique([matchId, seatNumber])\n  @@map(\"match_seats\")\n}\n\nmodel User {\n  id              Int         @id @default(autoincrement())\n  username        String      @unique\n  password        String\n  firstName       String      @map(\"first_name\")\n  lastName        String      @map(\"last_name\")\n  birthDate       DateTime    @map(\"birth_date\")\n  gender          Gender\n  city            String\n  address         String?\n  email           String      @unique\n  role            UserRole\n  approved        Boolean     @default(false)\n  preferredTeamId Int?        @map(\"preferred_team_id\")\n  preferredTeam   Team?       @relation(fields: [preferredTeamId], references: [id])\n  matchSeats      MatchSeat[]\n  createdAt       DateTime    @default(now()) @map(\"created_at\")\n  updatedAt       DateTime    @updatedAt @map(\"updated_at\")\n\n  @@map(\"users\")\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Stadium\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"noOfRows\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"no_of_rows\"},{\"name\":\"seatsPerRow\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"seats_per_row\"},{\"name\":\"matches\",\"kind\":\"object\",\"type\":\"Match\",\"relationName\":\"MatchToStadium\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"stadiums\"},\"Team\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"homeMatches\",\"kind\":\"object\",\"type\":\"Match\",\"relationName\":\"HomeTeam\"},{\"name\":\"awayMatches\",\"kind\":\"object\",\"type\":\"Match\",\"relationName\":\"AwayTeam\"},{\"name\":\"preferredBy\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"TeamToUser\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"teams\"},\"Match\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"dateTime\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"date_time\"},{\"name\":\"homeTeamId\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"home_team_id\"},{\"name\":\"awayTeamId\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"away_team_id\"},{\"name\":\"stadiumId\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"stadium_id\"},{\"name\":\"mainRefereeName\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"main_referee_name\"},{\"name\":\"linesmen1Name\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"linesmen1_name\"},{\"name\":\"linesmen2Name\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"linesmen2_name\"},{\"name\":\"homeTeam\",\"kind\":\"object\",\"type\":\"Team\",\"relationName\":\"HomeTeam\"},{\"name\":\"awayTeam\",\"kind\":\"object\",\"type\":\"Team\",\"relationName\":\"AwayTeam\"},{\"name\":\"stadium\",\"kind\":\"object\",\"type\":\"Stadium\",\"relationName\":\"MatchToStadium\"},{\"name\":\"matchSeats\",\"kind\":\"object\",\"type\":\"MatchSeat\",\"relationName\":\"MatchToMatchSeat\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"matches\"},\"MatchSeat\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"seatNumber\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"seat_number\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"user_id\"},{\"name\":\"matchId\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"match_id\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"MatchSeatToUser\"},{\"name\":\"match\",\"kind\":\"object\",\"type\":\"Match\",\"relationName\":\"MatchToMatchSeat\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"match_seats\"},\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"username\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"firstName\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"first_name\"},{\"name\":\"lastName\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"last_name\"},{\"name\":\"birthDate\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"birth_date\"},{\"name\":\"gender\",\"kind\":\"enum\",\"type\":\"Gender\"},{\"name\":\"city\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"address\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"UserRole\"},{\"name\":\"approved\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"preferredTeamId\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"preferred_team_id\"},{\"name\":\"preferredTeam\",\"kind\":\"object\",\"type\":\"Team\",\"relationName\":\"TeamToUser\"},{\"name\":\"matchSeats\",\"kind\":\"object\",\"type\":\"MatchSeat\",\"relationName\":\"MatchSeatToUser\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"users\"}},\"enums\":{},\"types\":{}}");
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    }
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map