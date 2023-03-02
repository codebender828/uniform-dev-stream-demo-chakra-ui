import { defineComponent, computed, h } from "vue";
import * as popover from "@zag-js/popover";
import { normalizeProps, useMachine } from "@zag-js/vue";
import {
  chakra,
  CStack,
  CText,
  useMultiStyleConfig,
} from "@chakra-ui/vue-next";

import { CButton } from "@chakra-ui/vue-next";

const Popover = defineComponent({
  name: "EPopover",
  setup(_, { slots }) {
    const styles = useMultiStyleConfig("Popover", {});

    const [state, send] = useMachine(
      popover.machine({
        id: "1",
        positioning: {
          placement: "bottom-start",
        },
      })
    );

    const apiRef = computed(() =>
      popover.connect(state.value, send, normalizeProps)
    );

    return () => {
      const api = apiRef.value;
      return (
        <div>
          <CButton variant="outline" colorScheme={"gray"} {...api.triggerProps}>
            Click me
          </CButton>
          <div {...api.positionerProps}>
            <chakra.div __css={styles.value.container} {...api.contentProps}>
              <chakra.button
                __css={styles.value.closebutton}
                {...api.closeTriggerProps}
              >
                X
              </chakra.button>
              <chakra.div __css={styles.value.header} {...api.titleProps}>
                Presenters
              </chakra.div>
              <chakra.div __css={styles.value.body} {...api.descriptionProps}>
                <CStack>
                  <CText>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </CText>
                  <CButton size="sm" onClick={() => api.close()}>
                    Okay
                  </CButton>
                </CStack>
              </chakra.div>
            </chakra.div>
          </div>
        </div>
      );
    };
  },
});

export default Popover;
