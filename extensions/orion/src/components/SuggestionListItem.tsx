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
          {/* SuggestionListItem only renders inside the Command Bar, so this
              always forces an immediate pop to root - see OpenTabAction. */}
          <OpenInOrionAction
            url={buildSearchUrl(suggestion)}
            title="Search in Orion"
            immediatePopToRoot
            onOpen={onOpen}
          />
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
