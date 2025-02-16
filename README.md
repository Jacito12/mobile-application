# Welcome to the Expo-Based Property Explorer App 🏠

This project is a **modern mobile application** built with [Expo](https://expo.dev) and [React Native](https://reactnative.dev). It serves as a **Property Explorer App**, designed to help users browse properties, view details, and manage their profiles seamlessly. The app features **tab-based navigation**, **dynamic routing**, and a clean, modular architecture for easy scalability.

---

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## **Key Features**

- **Tab Navigation**: Intuitive tab-based navigation for exploring properties, viewing profiles, and more.
- **Dynamic Property Details**: Each property has a unique page powered by dynamic routing (e.g., `/properties/123`).
- **Authentication**: A dedicated sign-in screen (`sign-in.tsx`) for user authentication.
- **File-Based Routing**: The app uses Expo's file-based routing system, making navigation and organization straightforward.
- **Reusable Layouts**: Shared layouts (e.g., `layout.tsx`) for consistent design across pages.

---

## **Why This Project?**

This project is designed to demonstrate best practices for building scalable and maintainable mobile apps with Expo and React Native. It includes:
- A clear folder structure for easy navigation.
- Dynamic routing for handling property details.
- Reusable components and layouts to minimize code duplication.
- A focus on user experience with smooth navigation and intuitive design.

---

## **Getting Started**

To get started with this project, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name