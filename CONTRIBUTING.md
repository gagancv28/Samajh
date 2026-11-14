# Contributing to Samajh

Thank you for your interest in contributing to **Samajh**! Our mission is to make official government, financial, and legal communications understandable and accessible to all citizens regardless of language or literacy level.

## Getting Started

1. **Fork and Clone** the repository:
   ```bash
   git clone https://github.com/gagancv28/Samajh.git
   cd Samajh
   ```

2. **Branching Model**:
   - Create a feature branch from `main`:
     ```bash
     git checkout -b feature/your-feature-name
     ```

3. **Local Development**:
   - Backend:
     ```bash
     cd server
     npm install
     npm run dev
     ```
   - Frontend:
     ```bash
     cd ../client
     npm install
     npm run dev
     ```

4. **Security & Secrets**:
   - **Never commit `.env` files or API keys.**
   - All environment variables should be documented in `.env.example`.

5. **Commit Conventions**:
   Follow conventional commits:
   - `feat(...)`: New user-facing or technical feature
   - `fix(...)`: Bug fix
   - `docs(...)`: Documentation improvements
   - `ci(...)`: Workflow or CI configuration
   - `chore(...)`: Maintenance or dependencies

6. **Submitting Pull Requests**:
   - Push your branch and open a PR against `main`.
   - Provide a clear summary of changes and test steps.
