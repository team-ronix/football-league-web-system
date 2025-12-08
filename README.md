# EFL - Egyptian Football League Management System

🔗 **Live Demo:** [https://team-ronix.dedyn.io/](https://team-ronix.dedyn.io/)

A comprehensive football league management system built with NestJS backend and React frontend. The system manages stadiums, teams, matches, and ticket reservations with role-based access control.

## 🎯 Features

### 👤 User Roles

#### **Admin**
- View and manage all registered users
- Approve or reject Fan account registrations
- Remove users from the system
- Monitor system activity
- **Login:** `admin` / `admin123`

#### **Manager** (Auto-approved on registration)
- Create and manage stadiums (name, rows, seats per row)
- Create and manage matches (teams, stadium, referees, date/time)
- Edit match details
- Delete matches and stadiums
- View all matches and stadiums

#### **Fan** (Requires admin approval)
- Browse available matches
- View match details and seat availability in real-time
- Reserve seats for matches
- View personal reservation history
- Update profile and preferred team
- Real-time seat updates via WebSocket

### 🏟️ Stadium Management
- Create stadiums with customizable seating capacity
- Define number of rows and seats per row
- View stadium details and associated matches

### ⚽ Match Management
- Create matches with home/away teams
- Assign stadiums and referee details
- Set match date and time
- Real-time seat availability tracking
- Edit and delete matches (managers only)

### 🎫 Ticket Reservation System
- Interactive seat selection interface
- Real-time seat availability updates
- Prevent double-booking
- View reservation history
- Cancel reservations

### 🔒 Security & Authentication
- Session-based authentication with Passport.js
- Role-based access control (RBAC)
- Password hashing with bcrypt
- Protected routes with guards
- Admin approval workflow for fans

### 🔄 Real-time Features
- WebSocket integration with Socket.IO
- Live seat availability updates
- Real-time match status changes
- Instant reservation notifications

## 🛠️ Tech Stack

### Backend
- **Framework:** NestJS
- **Database:** PostgreSQL/MySQL (configurable via environment)
- **ORM:** Prisma
- **Authentication:** Passport.js with session strategy
- **Real-time:** Socket.IO
- **Validation:** class-validator & class-transformer

### Frontend
- **Framework:** React 19
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS 4
- **HTTP Client:** Axios
- **Real-time:** Socket.IO Client
- **Build Tool:** Vite

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL or MySQL database
- npm or yarn

### Backend Setup

```bash
cd EFL

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your database credentials

# Run database migrations
npm run migrate

# Start development server
npm run start:dev
```

### Frontend Setup

```bash
cd EFL-front

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔧 Configuration

### Environment Variables (Backend)

```env
# Database type: "postgresql" or "mysql"
DATABASE_TYPE="postgresql"

# PostgreSQL connection
DATABASE_URL="postgresql://user:password@localhost:5432/EFL?schema=public"

# MySQL connection (when using MySQL)
# DATABASE_HOST="localhost"
# DATABASE_USER="root"
# DATABASE_PASSWORD="password"
# DATABASE_NAME="EFL"

# Frontend URL for CORS
FRONTEND_URL="http://localhost:5173"
```

### Database Provider

The system supports both PostgreSQL and MySQL. Configure via `DATABASE_TYPE` environment variable and update `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "postgresql" // or "mysql"
}
```

## 📱 API Endpoints

### Authentication
- `POST /auth/login` - User login (Manager/Fan)
- `POST /auth/register` - User registration
- `POST /auth/logout` - Logout
- `GET /auth/profile` - Get current user profile
- `PATCH /auth/profile` - Update profile

### Admin
- `POST /admin/login` - Admin login
- `GET /admin/users` - Get all users
- `GET /admin/users/pending` - Get pending approvals
- `POST /admin/users/approve` - Approve user
- `POST /admin/users/unapprove` - Unapprove user
- `DELETE /admin/users/:id` - Remove user

### Matches
- `GET /matches` - List all matches
- `GET /matches/:id` - Get match details
- `POST /matches` - Create match (Manager only)
- `PATCH /matches/:id` - Update match (Manager only)
- `DELETE /matches/:id` - Delete match (Manager only)
- `POST /matches/:id/reserve` - Reserve seat (Fan only)
- `DELETE /matches/:matchId/cancel/:seatId` - Cancel reservation
- `GET /matches/my-reservations` - Get user reservations

### Stadiums
- `GET /stadiums` - List all stadiums
- `GET /stadiums/:id` - Get stadium details
- `POST /stadiums` - Create stadium (Manager only)
- `PATCH /stadiums/:id` - Update stadium (Manager only)
- `DELETE /stadiums/:id` - Delete stadium (Manager only)

### Teams
- `GET /teams` - List all teams
- `GET /teams/:id` - Get team details

## 🚀 Deployment

The project includes GitHub Actions workflows for automated deployment to VPS using PM2.

### Backend Deployment
```bash
# On VPS: Install PM2
npm install pm2@latest -g

# Start application
pm2 start npm --name efl-backend -- start:prod
pm2 save
```

### Frontend Deployment
```bash
# Build for production
npm run build

# Serve with nginx or similar
```

## 📝 Scripts

### Backend
```bash
npm run start:dev    # Start development server
npm run build        # Build for production
npm run start:prod   # Start production server
npm run migrate      # Run database migrations
npm run prisma:studio # Open Prisma Studio
```

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

## 👥 Default Credentials

- **Admin:** `admin` / `admin123`
- Create Manager and Fan accounts via registration

## 📄 License

UNLICENSED - Private project

## 👨‍💻 Author

Team Ronix

---

Built with ❤️ using NestJS and React
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
