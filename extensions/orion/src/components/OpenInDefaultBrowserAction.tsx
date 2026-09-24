import { Action, closeMainWindow, Icon, open, PopToRootType } from "@raycast/api";

const OpenInDefaultBrowserAction = (props: { url: string; title?: string; onOpen?: () => void | Promise<void> }) => (
  <Action
    title={props.title ?? "Open in Default Browser"}
    icon={Icon.Globe}
    onAction={async () => {
      await open(props.url);
      await closeMainWindow({ clearRootSearch: true, popToRootType: PopToRootType.Immediate });
      // Do this after hiding the palette to avoid a visible empty-list frame.
      await props.onOpen?.();
    }}
  />
);

export default OpenInDefaultBrowserAction;
