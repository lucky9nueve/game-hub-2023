import { Button, HStack, useColorMode } from "@chakra-ui/react";

import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Button onClick={() => toggleColorMode()}>
        {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </HStack>
  );
};

export default ColorModeSwitch;
