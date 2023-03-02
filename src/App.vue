<template>
  <chakra.div
    min-h="100vh"
    bg="bg"
    transition="background-color 0.2s ease-in-out"
    layer-style="home.container"
  >
    <c-center h="full" w="full">
      <c-simple-grid template-columns="1fr 1fr" gap="5">
        <c-stack spacing="5">
          <c-heading>Primary Buttons</c-heading>
          <c-stack align="flex-start" spacing="4">
            <c-button size="lg">Large Button</c-button>
            <c-button size="md">Medium Button</c-button>
            <c-button size="sm">Small Button</c-button>
            <c-button size="xs">Tiny Button</c-button>
          </c-stack>
        </c-stack>
        <c-stack spacing="5">
          <c-heading>Secondary Buttons</c-heading>
          <c-stack spacing="4" align="flex-start">
            <c-button variant="secondary" size="lg">Large Button</c-button>
            <c-button variant="secondary" size="md">Medium Button</c-button>
            <c-button variant="secondary" size="sm">Small Button</c-button>
            <c-button variant="secondary" size="xs">Tiny Button</c-button>
          </c-stack>
        </c-stack>
        <c-stack spacing="5">
          <c-heading>Popover</c-heading>
          <c-stack spacing="4" align="flex-start">
            <EPopover />
          </c-stack>
        </c-stack>
      </c-simple-grid>
      <!-- 
        Popover compoennt
       -->
      <!-- <EPopover> Hello Popover </EPopover> -->
    </c-center>
    <c-icon-button
      color-scheme="velvet"
      variant="outline"
      position="absolute"
      top="4"
      right="4"
      :aria-label="
        useColorModeValue(`Switch to dark mode`, `Switch to light mode`).value
      "
      :icon="useColorModeValue('moon', 'sun').value"
      @click="toggleColorMode"
    />
  </chakra.div>
</template>

<script setup lang="ts">
import { chakra, useColorMode, useColorModeValue } from "@chakra-ui/vue-next";
import { EPopover } from "./components/popover";

const { toggleColorMode } = useColorMode();
</script>
