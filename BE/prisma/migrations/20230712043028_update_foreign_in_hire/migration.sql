-- DropForeignKey
ALTER TABLE `hire_request` DROP FOREIGN KEY `hire_request_code_request_id_fkey`;

-- AddForeignKey
ALTER TABLE `hire_request` ADD CONSTRAINT `hire_request_code_request_id_fkey` FOREIGN KEY (`code_request_id`) REFERENCES `code_request`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
