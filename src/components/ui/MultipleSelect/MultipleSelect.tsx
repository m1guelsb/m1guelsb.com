"use client";

import { cx } from "class-variance-authority";
import { useMultipleSelection, useSelect } from "downshift";
import { ErrorMessage, buttonVariants } from "..";
import { Cross1Icon, PlusIcon } from "@radix-ui/react-icons";
import { ComponentProps } from "react";

export interface Item {
  id: number;
  label: string;
}

interface MultipleSelectProps extends ComponentProps<"div"> {
  placeholder: string;
  itemsList: Item[];
  onValueChange?: (value: Item[] | undefined) => void;
  errorMessage?: string;
}

export const MultipleSelect = ({
  itemsList,
  placeholder,
  onValueChange,
  errorMessage,
  ...props
}: MultipleSelectProps) => {
  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection<Item>({
    onStateChange: ({ selectedItems }) => onValueChange?.(selectedItems),
  });

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
    <div className="w-full" {...props}>
      <div className="flex flex-col gap-1">
        <label className="w-fit text-lg" {...getLabelProps()}>
          {placeholder}
        </label>
        <div className="shadow-sm inline-flex gap-2 items-center flex-wrap  rounded-md focus-within:border-gray-400">
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
                  className="px-1 cursor-pointer flex items-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeSelectedItem(item);
                  }}
                >
                  <button type="button">
                    <Cross1Icon className="hover:text-accent focus:text-accent" />
                  </button>
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
                highlightedIndex === index && "bg-background3",
                selectedItem === item && "font-bold",
                "py-2 px-3 shadow-sm flex flex-col cursor-pointer rounded-md"
              )}
              key={`${item.id}${index}`}
              {...getItemProps({ item, index })}
            >
              {item.label}
            </li>
          ))}
      </ul>
      <ErrorMessage message={errorMessage} />
    </div>
  );
};

const itemListFilter = (selectedItems: Item[]) => (item: Item) =>
  selectedItems.indexOf(item) < 0;
