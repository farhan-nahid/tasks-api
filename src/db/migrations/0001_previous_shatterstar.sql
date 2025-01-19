PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_tasks_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`done` integer DEFAULT false NOT NULL,
	`created_at` integer,
	`updated_at` integer
);
--> statement-breakpoint
INSERT INTO `__new_tasks_table`("id", "title", "description", "done", "created_at", "updated_at") SELECT "id", "title", "description", "done", "created_at", "updated_at" FROM `tasks_table`;--> statement-breakpoint
DROP TABLE `tasks_table`;--> statement-breakpoint
ALTER TABLE `__new_tasks_table` RENAME TO `tasks_table`;--> statement-breakpoint
PRAGMA foreign_keys=ON;