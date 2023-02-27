/**
 * In this hypothetical scenario, List is a memoized component,
 * which means that it will only re-render when one of its props
 * change. `sortDirection` can be either 'ASC' or 'DESC'. In the
 * useMemo, we are sorting the items according to the `sortDirection`.
 * `items` is an array of strings.
 *
 * However, when the user presses on the <Button> to change the
 * sort direction, <List> does not get re-rendered and the user
 * does not see any changes (it always appears in ascending order).
 *
 * Why? What is the quickest solution, in your opinion,
 * to solve this problem?
 */

import React from "react";
import { View } from "react-native";
import { List, Button } from "some-component-library";
import { changeSortDirectionFunctions } from "some-sort-library";

export function ItemList({ items }) {
  const [sortDirection, setSortDirection] = React.useState("ASC");

  const sortedItems = React.useMemo(() => {
    return items.sort(changeSortDirectionFunctions[sortDirection]);
  }, [sortDirection, items]);

  return (
    <View>
      <Button
        text="Change sort direction"
        onPress={() => {
          setSortDirection((previous) => {
            if (previous === "ASC") return "DESC";
            return "ASC";
          });
        }}
      />
      <List items={sortedItems} />
    </View>
  );
}
