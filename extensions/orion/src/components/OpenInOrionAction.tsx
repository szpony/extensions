import { Action, closeMainWindow, Icon, PopToRootType } from "@raycast/api";

import { closeLauncherTabs, openInOrion } from "../utils";

const OpenInOrionAction = (props: { url: string; title?: string; onOpen?: () => void | Promise<void> }) => (
  <Action
    title={props.title ?? "Open in Orion"}
    icon={Icon.Globe}
    onAction={async () => {
      // Close launcher tabs before opening the result (which brings Orion to the
      // front); otherwise a lingering raycast:// tab re-fires the deeplink.
      await closeLauncherTabs();
      await openInOrion(props.url);
      await closeMainWindow({ clearRootSearch: true, popToRootType: PopToRootType.Immediate });
      // Clear persistent command state only after the palette has hidden.
      await props.onOpen?.();
    }}
  />
);

export default OpenInOrionAction;
