function moveRightTo(element){
	moveHorizontallyTo(element, dx_small);
}

function moveLeftTo(element){
	moveHorizontallyTo(element, -dx_small);
}

function moveHorizontallyTo(element, distance){
	previousStep = element.prev();
	previousStepX = parseInt(previousStep.attr("data-x"));
	previousStepY = parseInt(previousStep.attr("data-y"));
	previousStepZ = parseInt(previousStep.attr("data-z"));
	previousStepR = parseInt(previousStep.attr("data-rotate"));
	currentStepX = previousStepX + distance;
	element.attr("data-x", currentStepX + "");
	element.attr("data-y", previousStepY + "");
	element.attr("data-z", previousStepZ + "");
	element.attr("data-rotate", previousStepR + "");
}

function moveDownTo(element){
	moveVerticallyTo(element, dy_small);
}

function moveUpTo(element){
	moveVerticallyTo(element, -dy_small);
}

function moveVerticallyTo(element, distance){
	previousStep = element.prev();
	previousStepX = parseInt(previousStep.attr("data-x"));
	previousStepY = parseInt(previousStep.attr("data-y"));
	previousStepZ = parseInt(previousStep.attr("data-z"));
	previousStepR = parseInt(previousStep.attr("data-rotate"));
	currentStepY = previousStepY + distance;
	element.attr("data-x", previousStepX + "");
	element.attr("data-y", currentStepY + "");
	element.attr("data-z", previousStepZ);
	element.attr("data-rotate", previousStepR + "");
}

function zoomInto(element){
	zoom(element, -dz_large);
}

function zoomOutTo(element){
	zoom(element, dz_large);
}

function zoom(element, distance){
	previousStep = element.prev();
	previousStepX = parseInt(previousStep.attr("data-x"));
	previousStepY = parseInt(previousStep.attr("data-y"));
	previousStepZ = parseInt(previousStep.attr("data-z"));
	previousStepR = parseInt(previousStep.attr("data-rotate"));
	currentStepZ = previousStepZ + distance;
	element.attr("data-x", previousStepX + "");
	element.attr("data-y", previousStepY + "");
	element.attr("data-z", currentStepZ + "");
	element.attr("data-rotate", previousStepR + "");
}

function zoomAndMoveVertically(element, dy, dz){
	previousStep = element.prev();
	previousStepX = parseInt(previousStep.attr("data-x"));
	previousStepY = parseInt(previousStep.attr("data-y"));
	previousStepZ = parseInt(previousStep.attr("data-z"));
	previousStepR = parseInt(previousStep.attr("data-rotate"));
	currentStepY = previousStepY + dy;
	currentStepZ = previousStepZ + dz;
	element.attr("data-x", previousStepX + "");
	element.attr("data-y", currentStepY + "");
	element.attr("data-z", currentStepZ + "");
	element.attr("data-rotate", previousStepR + "");
}

function zoomAndMoveHorizontally(element, dx, dz){
	previousStep = element.prev();
	previousStepX = parseInt(previousStep.attr("data-x"));
	previousStepY = parseInt(previousStep.attr("data-y"));
	previousStepZ = parseInt(previousStep.attr("data-z"));
	previousStepR = parseInt(previousStep.attr("data-rotate"));
	currentStepX = previousStepX + dx;
	currentStepZ = previousStepZ + dz;
	element.attr("data-x", currentStepX + "");
	element.attr("data-y", previousStepY + "");
	element.attr("data-z", currentStepZ + "");
	element.attr("data-rotate", previousStepR + "");
}

function zoomAndMoveTo(element, dx, dy, dz){
	previousStep = element.prev();
	previousStepX = parseInt(previousStep.attr("data-x"));
	previousStepY = parseInt(previousStep.attr("data-y"));
	previousStepZ = parseInt(previousStep.attr("data-z"));
	previousStepR = parseInt(previousStep.attr("data-rotate"));
	currentStepX = previousStepX + dx;
	currentStepY = previousStepY + dy;
	currentStepZ = previousStepZ + dz;
	element.attr("data-x", currentStepX + "");
	element.attr("data-y", currentStepY + "");
	element.attr("data-z", currentStepZ + "");
	element.attr("data-rotate", previousStepR + "");
}

function rotateAndMoveTo(element, dx, dy, dz, r){
	previousStep = element.prev();
	previousStepX = parseInt(previousStep.attr("data-x"));
	previousStepY = parseInt(previousStep.attr("data-y"));
	previousStepZ = parseInt(previousStep.attr("data-z"));
	previousStepR = parseInt(previousStep.attr("data-rotate"));
	currentStepX = previousStepX + dx;
	currentStepY = previousStepY + dy;
	currentStepZ = previousStepZ + dz;
	element.attr("data-x", currentStepX + "");
	element.attr("data-y", currentStepY + "");
	element.attr("data-z", currentStepZ + "");
	element.attr("data-rotate", r + "");
}

/*function dataprev_moveRightTo(element){
	elementId = element.attr("id");
	previousStepId = element.attr("data-prev");
	previousStep = $("#" + previousStepId);
	previousStepX = parseInt(previousStep.attr("data-x"));
	previousStepY = parseInt(previousStep.attr("data-y"));
	previousStepZ = parseInt(previousStep.attr("data-z"));
	currentStepX = previousStepX + dx_small;
	element.attr("data-x", currentStepX + "");
	element.attr("data-y", previousStepY + "");
	element.attr("data-z", previousStepZ);
}*/