<script setup lang="ts">
import Navbar from "./Navbar.vue";
import { useElementVisibility } from "@vueuse/core";
import { useTemplateRef } from "vue";

const aboutTarget = useTemplateRef<HTMLDivElement>("target1");
const aboutIsVisible = useElementVisibility(aboutTarget);

const projectsTarget = useTemplateRef<HTMLDivElement>("target2");
const projectsIsVisible = useElementVisibility(projectsTarget);
</script>

<template>
  <div id="main-page" class="text-black dark:text-white overflow-x-hidden">
    <Navbar />
    <div
      id="home"
      class="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900"
    >
      <div>
        <p
          class="relative m-auto animate-typewriter overflow-hidden whitespace-nowrap border-r sm:text-2xl md:text-5xl lg:text-9xl"
        >
          Hi, I'm Daniel.
        </p>
      </div>
      <p class="text-2xl font-medium">Passionate in software engineering</p>
    </div>
    <div
      id="about"
      class="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900"
    >
      <p class="text-8xl font-medium mb-8" ref="target1">About</p>
      <p class="text-2xl text-center font-medium mb-8">
        I am a software engineer with a passion for building web applications.
      </p>

      <div
        :class="[
          'grid grid-cols-4 gap-8 opacity-0',
          aboutIsVisible ? ' animate-fadein' : ' ',
        ]"
      >
        <div>
          <div
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Java
            </h5>
            <i class="fab fa-java fa-3x"></i>
          </div>
        </div>
        <div>
          <div
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              JavaScript
            </h5>
            <i class="fab fa-js fa-3x"></i>
          </div>
        </div>
        <div>
          <div
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              CSS
            </h5>
            <i class="fab fa-css3 fa-3x"></i>
          </div>
        </div>
        <div>
          <div
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              HTML
            </h5>
            <i class="fab fa-html5 fa-3x"></i>
          </div>
        </div>
      </div>
    </div>
    <div
      id="projects"
      class="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900"
    >
      <p class="text-8xl font-medium mb-8" ref="target2" >Projects</p>
      <div :class="['grid grid-cols-2 opacity-0', projectsIsVisible ? 'animate-fadein' : '']">
        <div
          class="m-8 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <i class="fab fa-github fa-3x px-8"></i>
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Web Application
          </h5>
          <p>Skills Used: Javascript, HTML, CSS, Vue, TailwindCSS</p>
        </div>
        <div
          class="m-8 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <i class="fab fa-github fa-3x px-8"></i>
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
          Connect Four Minimax
          </h5>
          <p>Skills Used: Java, JavaFX</p>
        </div>
      </div>
    </div>
    <div
      id="contact"
      class="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900"
    >
      <p class="text-8xl font-medium mb-8">Contact</p>
      <p class="text-2xl text-center font-medium mb-8">
        Want to connect? Here are several different ways you can contact me!
      </p>
      <div>
        <a href="mailto:damoruso321@gmail.com">
          <i class="fa fa-envelope fa-3x px-8"></i>
        </a>
        <a href="https://github.com/positivevibes123">
          <i class="fab fa-github fa-3x px-8"></i>
        </a>
        <a href="https://www.linkedin.com/in/danielamoruso/">
          <i class="fab fa-linkedin fa-3x px-8"></i>
        </a>
      </div>
    </div>
  </div>
</template>
