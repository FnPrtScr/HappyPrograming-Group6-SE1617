-- DropForeignKey
ALTER TABLE `code_request_skill` DROP FOREIGN KEY `code_request_skill_code_request_id_fkey`;

-- DropForeignKey
ALTER TABLE `code_request_skill` DROP FOREIGN KEY `code_request_skill_skill_id_fkey`;

-- AddForeignKey
ALTER TABLE `code_request_skill` ADD CONSTRAINT `code_request_skill_skill_id_fkey` FOREIGN KEY (`skill_id`) REFERENCES `skill`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `code_request_skill` ADD CONSTRAINT `code_request_skill_code_request_id_fkey` FOREIGN KEY (`code_request_id`) REFERENCES `code_request`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
