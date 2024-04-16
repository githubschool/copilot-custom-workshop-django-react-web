{
    "name": "Python-NodeJS",
    "build": {
        "dockerfile": "Dockerfile",
        "context": ".."
    },
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash"
    },
    "extensions": [
        "ms-python.python",
        "GitHub.copilot",
        "GitHub.copilot-chat",
        "ckolkman.vscode-postgres"
    ],
    "features": {
        "ghcr.io/devcontainers/features/docker-in-docker:2": {}
    }
}