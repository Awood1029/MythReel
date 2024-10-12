const fs = require("fs");
const path = require("path");

// Directories or files to exclude
const excludeList = [
	"node_modules",
	"dist",
	"build",
	".git",
	".idea",
	".vscode",
	"target", // common for Java projects
];

// Function to recursively list files and directories
function listFiles(dir, prefix = "") {
	try {
		// Read the contents of the directory
		const files = fs.readdirSync(dir);

		if (files.length === 0) {
			console.log(`${prefix}${dir} is empty`);
			return;
		}

		files.forEach((file) => {
			const filePath = path.join(dir, file);
			const stat = fs.statSync(filePath);

			// Skip excluded directories or files
			if (excludeList.some((excluded) => filePath.includes(excluded))) {
				console.log(`Skipping ${filePath}`);
				return;
			}

			// Print the file or directory name
			console.log(`${prefix}${file}`);

			// If it's a directory, recursively list its contents
			if (stat.isDirectory()) {
				listFiles(filePath, `${prefix}  `); // Add indentation for nested levels
			}
		});
	} catch (error) {
		console.error(`Error reading directory ${dir}:`, error.message);
	}
}

// Starting directory: the current working directory
const startDir = process.cwd();
console.log(`Directory structure of: ${startDir}\n`);
listFiles(startDir);
