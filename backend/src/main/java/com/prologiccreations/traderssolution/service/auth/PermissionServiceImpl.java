//package com.prologiccreations.traderssolution.service.auth;
//
//import com.prologiccreations.traderssolution.dao.auth.PermissionRepository;
//import com.prologiccreations.traderssolution.dto.Response;
//import com.prologiccreations.traderssolution.model.auth.Permission;
//import com.prologiccreations.traderssolution.service.super_classes.auth.PermissionService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDateTime;
//
//import static com.prologiccreations.traderssolution.TradersSolutionApplication.getCurrentUsername;
//import static com.prologiccreations.traderssolution.constants.enums.OperationStatus.FAILURE;
//import static com.prologiccreations.traderssolution.constants.enums.OperationStatus.SUCCESS;
//
//@Service
//@RequiredArgsConstructor
//public class PermissionServiceImpl implements PermissionService {
//
//    private final PermissionRepository permissionRepository;
//
//    @Override
//    public Response storeData(Permission data) {
//        String validationMsg = validate(data);
//        if (validationMsg == null) {
//            permissionRepository.save(data);
//            return new Response(SUCCESS, "Successfully stored data", null);
//        } else {
//            return new Response(FAILURE, validationMsg, null);
//        }
//    }
//
//    @Override
//    public Response<Page<Permission>> getAll(Pageable pageable) {
//        Page<Permission> page = permissionRepository.findByActive(true, pageable);
//        return new Response<>(SUCCESS, null, page);
//    }
//
//    @Override
//    public Response<Permission> getById(Long id) {
//        Permission permission = permissionRepository.findById(id).orElse(new Permission());
//        return new Response<>(SUCCESS, null, permission);
//    }
//
//    @Override
//    public Response delete(Long id) {
//        permissionRepository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
//        return new Response(SUCCESS, "Deleted successfully", null);
//    }
//
//    @Override
//    public String validate(Permission data) {
//        return checkDuplicate(data);
//    }
//
//    @Override
//    public String checkDuplicate(Permission data) {
////        boolean permissionnameExists;
////        if (data.hasId()) {
////            permissionnameExists = permissionRepository.existsByPermissionname(data.getPermissionname(), data.getId());
////        } else {
////            permissionnameExists = permissionRepository.existsByPermissionname(data.getPermissionname());
////        }
////        return permissionnameExists ? "Failed to register. Permission already exists" : null;
//        return null;
//    }
//
//}
