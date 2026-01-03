# CineVault Server - AI Coding Guidelines

## Project Overview
This is a Node.js Express server for CineVault, a movie vault application. The server provides REST API endpoints for movie data management, likely integrating with external movie APIs.

## Architecture
- **Entry Point**: `src/server.js` - starts the server
- **Main App**: `src/app.js` - Express app configuration, middleware, routes
- **Routes**: `src/routes/` - API endpoint definitions
- **Models**: `src/models/` - data models (currently empty, intended for database schemas)
- **Config**: `src/config/` - configuration files (currently empty, intended for DB connections, API keys)

## Key Dependencies
- **express**: Web framework for building the API
- **axios**: HTTP client for external API calls (e.g., fetching movie data from TMDB)
- **cors**: Enables cross-origin requests
- **dotenv**: Loads environment variables from `.env` file

## Development Workflow
- **Start Dev Server**: Use `nodemon src/server.js` for auto-restart on changes
- **Linting**: Run `npx eslint src/` to check code quality
- **Formatting**: Run `npx prettier --write src/` to format code
- **Environment**: Create `.env` file for API keys and config (e.g., TMDB_API_KEY)

## Coding Patterns
- Use CommonJS modules (`require`/`module.exports`)
- Structure routes as separate files in `src/routes/`, export router functions
- Handle async operations with promises or async/await
- Use axios for external API integrations, configure base URLs in config
- Follow RESTful conventions for endpoints (GET/POST/PUT/DELETE)

## Examples
- Route structure: `src/routes/movies.js` exports `express.Router()` with movie-related endpoints
- API call: Use axios.get('https://api.themoviedb.org/3/movie/popular') for movie data
- Middleware: Apply cors() globally in `src/app.js`

## File References
- [package.json](server/package.json) - dependencies and scripts
- [src/](server/src/) - main source directory structure