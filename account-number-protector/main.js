const accountNumberProtector = cardNumberString => {
  return `**${cardNumberString[12]}${cardNumberString[13]}${cardNumberString[14]}${cardNumberString[15]}`
}
