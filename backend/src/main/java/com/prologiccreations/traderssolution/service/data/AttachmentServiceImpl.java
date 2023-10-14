package com.prologiccreations.traderssolution.service.data;

import com.prologiccreations.traderssolution.dao.data.AttachmentRepository;
import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.model.data.Attachment;
import com.prologiccreations.traderssolution.service.super_classes.data.AttachmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import static com.prologiccreations.traderssolution.TradersSolutionApplication.getCurrentUsername;
import static com.prologiccreations.traderssolution.constants.enums.OperationStatus.FAILURE;
import static com.prologiccreations.traderssolution.constants.enums.OperationStatus.SUCCESS;

@Service
@RequiredArgsConstructor
public class AttachmentServiceImpl implements AttachmentService {

    private final AttachmentRepository AttachmentRepository;

    @Override
    public Response storeData(Attachment data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
            AttachmentRepository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }

    @Override
    public Response<Page<Attachment>> getAll(Pageable pageable) {
        Page<Attachment> page = AttachmentRepository.findByActive(true, pageable);
        return new Response<>(SUCCESS, null, page);
    }

    @Override
    public Response<Attachment> getById(Long id) {
        Attachment Attachment = AttachmentRepository.findById(id).orElse(new Attachment());
        return new Response<>(SUCCESS, null, Attachment);
    }

    @Override
    public Response delete(Long id) {
        AttachmentRepository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(Attachment data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(Attachment data) {
//        boolean AttachmentnameExists;
//        if (data.hasId()) {
//            AttachmentnameExists = AttachmentRepository.existsByAttachmentname(data.getAttachmentname(), data.getId());
//        } else {
//            AttachmentnameExists = AttachmentRepository.existsByAttachmentname(data.getAttachmentname());
//        }
//        return AttachmentnameExists ? "Failed to register. Attachment already exists" : null;
        return null;
    }

}
