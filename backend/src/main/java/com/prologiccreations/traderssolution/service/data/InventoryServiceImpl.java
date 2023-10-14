package com.prologiccreations.traderssolution.service.data;

import com.prologiccreations.traderssolution.dao.data.InventoryRepository;
import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.model.data.Inventory;
import com.prologiccreations.traderssolution.service.super_classes.data.InventoryService;
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
public class InventoryServiceImpl implements InventoryService {

    private final InventoryRepository InventoryRepository;

    @Override
    public Response storeData(Inventory data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
            InventoryRepository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }

    @Override
    public Response<Page<Inventory>> getAll(Pageable pageable) {
        Page<Inventory> page = InventoryRepository.findByActive(true, pageable);
        return new Response<>(SUCCESS, null, page);
    }

    @Override
    public Response<Inventory> getById(Long id) {
        Inventory Inventory = InventoryRepository.findById(id).orElse(new Inventory());
        return new Response<>(SUCCESS, null, Inventory);
    }

    @Override
    public Response delete(Long id) {
        InventoryRepository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(Inventory data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(Inventory data) {
//        boolean InventorynameExists;
//        if (data.hasId()) {
//            InventorynameExists = InventoryRepository.existsByInventoryname(data.getInventoryname(), data.getId());
//        } else {
//            InventorynameExists = InventoryRepository.existsByInventoryname(data.getInventoryname());
//        }
//        return InventorynameExists ? "Failed to register. Inventory already exists" : null;
        return null;
    }

}
