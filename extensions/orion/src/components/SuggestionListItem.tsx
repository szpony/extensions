import { Action, ActionPanel, Icon, List } from "@raycast/api";

import { buildSearchUrl, getSearchEngineName } from "../utils";
import OpenInOrionAction from "./OpenInOrionAction";

const SuggestionListItem = (props: { suggestion: string; id?: string; onOpen?: () => void }) => {
  const { suggestion, id, onOpen } = props;
  return (
    <List.Item
      id={id}
      icon={Icon.MagnifyingGlass}
      title={suggestion}
      accessories={[{ text: getSearchEngineName() }]}
      actions={
        <ActionPanel>
          <OpenInOrionAction url={buildSearchUrl(suggestion)} title="Search in Orion" onOpen={onOpen} />
          <Action.CopyToClipboard
            title="Copy Suggestion"
            content={suggestion}
            shortcut={{ modifiers: ["cmd"], key: "." }}
          />
        </ActionPanel>
      }
    />
  );
};

export default SuggestionListItem;
