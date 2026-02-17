# Reactive Physio Clinic Website

Official website for **Reactive Physio Clinic**, a physiotherapy and rehabilitation center located in Prishtinë, Kosovo.

This website provides information about services, blog articles, online appointment booking, and direct WhatsApp contact.


## Tech Stack

This project is built with:

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **shadcn/ui**
- **Lucide Icons**

## 📂 Project Structure

src/
├── components/ # Reusable UI components
├── pages/ # Main pages (Home, Blog, Contact, etc.)
├── data/ # Static content (blog articles, services, testimonials)
├── lib/ # Utilities
└── main.tsx # Application entry point

## How can I edit this code?

There are several ways of editing your application.

The only requirement is having Node.js & npm installed 

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.
  
## Local Development

Once dependencies are installed, you can run:

```sh
# Start dev server on http://localhost:5173 (default Vite port)
npm run dev

# Type-check the project
npm run typecheck

# Lint the codebase
npm run lint

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Environment Variables

Depending on your setup, you may use environment variables for things like analytics, API URLs, or third‑party integrations.

- **Vite convention**: variables must start with `VITE_` to be exposed to the client.
- Create a `.env.local` file (ignored by Git) for local secrets.

Example:

```env
VITE_API_BASE_URL=https://api.example.com
VITE_ANALYTICS_ID=XXXXXXX
```

*(If this project does not yet use env variables, you can safely ignore this section or remove it.)*

## Project Conventions

- **Styling**: Tailwind utility classes for layout and spacing, with `shadcn/ui` components for complex UI elements.
- **Icons**: Use `lucide-react` icons for consistency.
- **Components**: Prefer small, reusable components under `src/components`.
- **Data**: Static content (services, FAQs, blog metadata) should live under `src/data` instead of being hard-coded inside components.

## Deployment

This is a standard Vite + React app, so it can be deployed to platforms such as:

- **Vercel**
- **Netlify**
- **Cloudflare Pages**
- **Static hosting (S3, Azure Static Web Apps, etc.)**

General steps:

1. Run `npm run build`.
2. Deploy the generated `dist/` folder to your hosting provider.

Refer to your provider’s Vite/React deployment guide for details.

## Contact

For questions about the clinic or this website:

- **Clinic**: Reactive Physio Clinic, Prishtinë, Kosovo  
- **Website maintainer**: open an issue or pull request in this repository.

## License

If you plan for this to be open source, add a license (for example `MIT`) and reference it here:

```text
This project is licensed under the MIT License.
See the LICENSE file for details.
```

