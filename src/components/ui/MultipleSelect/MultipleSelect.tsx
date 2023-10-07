"use client";

import { cx } from "class-variance-authority";
import { useMultipleSelection, useSelect } from "downshift";
import { buttonVariants } from "..";
import { PlusIcon } from "@radix-ui/react-icons";

interface Item {
  id: string;
  label: string;
}

interface MultipleSelectProps {
  placeholder: string;
  itemsList: Item[];
  value?: Item[];
  onValueChange?: (value: Item[]) => void;
}

export const MultipleSelect = ({
  itemsList,
  placeholder,
  onValueChange,
}: MultipleSelectProps) => {
  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection<Item>();

  onValueChange?.(selectedItems);

  const items = itemsList.filter(itemListFilter(selectedItems));
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getLabelProps,
    highlightedIndex,
    getItemProps,
  } = useSelect<Item>({
    selectedItem: null,
    defaultHighlightedIndex: 0,
    items,
    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges;
      switch (type) {
        case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
        case useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
        case useSelect.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true,
            highlightedIndex: 0,
          };
      }
      return changes;
    },
    onStateChange: ({ type, selectedItem: newSelectedItem }) => {
      switch (type) {
        case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
        case useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
        case useSelect.stateChangeTypes.ItemClick:
        case useSelect.stateChangeTypes.ToggleButtonBlur:
          if (newSelectedItem) {
            addSelectedItem(newSelectedItem);
          }
          break;
        default:
          break;
      }
    },
  });

  return (
    <div className="w-full">
      <div className="flex flex-col gap-1">
        <label className="w-fit" {...getLabelProps()}>
          {placeholder}
        </label>
        <div className="shadow-sm bg-white inline-flex gap-2 items-center flex-wrap  rounded-md focus-within:border-gray-400">
          {selectedItems.map((item, index) => {
            return (
              <span
                className={buttonVariants({
                  size: "medium",
                  variant: "outline",
                })}
                key={`selected-item-${index}`}
                {...getSelectedItemProps({
                  selectedItem: item,
                  index,
                })}
              >
                {item.label}

                <span
                  className="px-1 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeSelectedItem(item);
                  }}
                >
                  &#10005;
                </span>
              </span>
            );
          })}
          <div
            className="outline-2 outline-gray-400 cursor-pointer focus:bg-gray-200"
            {...getToggleButtonProps(
              getDropdownProps({ preventKeyAction: isOpen })
            )}
          >
            <span
              className={buttonVariants({
                size: "medium",
                variant: "primary",
              })}
            >
              <PlusIcon />
            </span>
          </div>
        </div>
      </div>
      <ul
        className={`absolute w-[18rem] w-inherit bg-background2 mt-1 shadow-md max-h-80 overflow-y-scroll pl-[6px] pt-[6px] pb-[6px] border border-accent rounded-md p-0 z-10 ${
          !(isOpen && items.length) && "hidden"
        }`}
        {...getMenuProps()}
      >
        {isOpen &&
          items.map((item, index) => (
            <li
              className={cx(
                highlightedIndex === index && "bg-blue-300",
                selectedItem === item && "font-bold",
                "py-2 px-3 shadow-sm flex flex-col cursor-pointer",
                buttonVariants({
                  size: "medium",
                  variant: "secondary",
                })
              )}
              key={`${item.id}${index}`}
              {...getItemProps({ item, index })}
            >
              {item.label}
            </li>
          ))}
      </ul>
    </div>
  );
};

function itemListFilter(selectedItems: Item[]) {
  return function itemsFilter(item: Item) {
    return selectedItems.indexOf(item) < 0;
  };
}
