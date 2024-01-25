type IFormatLocale =
  | number
  | string
  | {
      amount: string | number;
      shorten?: boolean;
    };

export function formatNameToInitials(name: string): string {
  const words = name.split(" ");

  if (words.length === 1) {
    // For single names, return the first two letters in uppercase
    return words[0].substring(0, 2).toUpperCase();
  } else {
    // For multiple names, concatenate the first two letters of the first two names and return in uppercase
    const initials = words
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join("");
    return initials;
  }
}

export function formatMoneyMobile(num: string | number) {
  // Ensure num is a valid number
  if (isNaN(Number(num))) {
    throw new Error("Invalid number");
  }

  const numericValue = Number(num);

  // Handle the case when the number is 0
  if (numericValue === 0) {
    return "0";
  }

  // Define the suffixes for thousands, millions, and billions
  const suffixes = ["", "K", "M", "B"];

  // Determine the appropriate suffix based on the magnitude of the number
  const magnitude = Math.floor(Math.log10(Math.abs(numericValue)) / 3);
  const suffix = suffixes[Math.min(suffixes.length - 1, magnitude)];

  // Calculate the scaled value, round to two decimal places
  const scaledValue = numericValue / Math.pow(10, magnitude * 3);
  const roundedValue = Math.round(scaledValue * 100) / 100;

  // Use toLocaleString to format the rounded value with the specified locale
  const formattedMoney = roundedValue.toLocaleString("en-us", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Concatenate the formatted value with the appropriate suffix
  return formattedMoney + suffix;
}

export function formatLocale(value: IFormatLocale) {
  const num =
    typeof value === "string" || typeof value === "number"
      ? value
      : value.amount;
  const shorten =
    typeof value !== "string" && typeof value !== "number" && value?.shorten;
  // Ensure num is a valid number
  if (isNaN(Number(num))) {
    throw new Error("Invalid number");
  }

  if (shorten) {
    return formatMoneyMobile(num);
  }

  // Use toLocaleString to format the number with the specified locale
  const formattedMoney = Number(num).toLocaleString("en-us", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedMoney;
}
